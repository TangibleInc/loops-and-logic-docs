import { parsePhp, parseArrayItems, walkNodes } from './parsePhp'

/**
 * Extract loop type class and config
 */
function extract(node, childWalk, state) {
  switch (node.nodeType) {
    case 'Stmt_Namespace':
      state.namespace = node.name.name
      console.log('  Namespace:', state.namespace)
      if (node.stmts) childWalk(node.stmts)
      break
    case 'Stmt_Class':
      {
        const className = node.name.name
        const extendsClass = node?.extends?.name
        console.log(
          '  Class',
          className,
          ...(extendsClass ? ['extends', extendsClass] : [])
        )
        // console.log(node)
        for (const childNode of node.stmts) {
          if (
            childNode.nodeType === 'Stmt_Property' &&
            childNode.props[0] &&
            childNode.props[0]?.name.name === 'config'
          ) {
            const { items = [] } = childNode.props[0].default

            const config = parseArrayItems(items)

            config.namespace = state.namespace
            config.className = className
            config.extends = extendsClass

            // Loop type name
            if (config.name) {
              if (!config.title) {
                config.title =
                  config.name[0].toUpperCase() +
                  config.name.slice(1).replace(/_/g, ' ')
              }
              state.classes[className] = config
            }
          } else {
            // Stmt_ClassMethod
          }
        }
      }
      break

    case 'Stmt_Expression':
      if (
        node.expr &&
        node.expr.nodeType === 'Expr_Assign' &&
        node.expr.var &&
        node.expr.var.var &&
        node.expr.var.var.nodeType === 'Expr_StaticPropertyFetch' &&
        node.expr.var.var.name &&
        node.expr.var.var.name.name === 'config'
      ) {
        // AssignmentLoop::$config['query_args'] = [];

        const className = node.expr.var.var.class.name
        const propName = node.expr.var.dim.value

        if (node.expr.expr.nodeType === 'Expr_Array') {
          const items = parseArrayItems(node.expr.expr.items)
          // console.log(className, propName, items)
          if (state.classes[className]) {
            state.classes[className][propName] = Object.assign(
              state.classes[className][propName] || {},
              items
            )
          }
        } else if (
          node.expr.expr.nodeType === 'Expr_FuncCall' &&
          node.expr.expr.name &&
          node.expr.expr.name.name === 'array_merge' &&
          node.expr.expr.args[1] &&
          node.expr.expr.args[1].value &&
          node.expr.expr.args[1].value.nodeType === 'Expr_Array'
        ) {
          const items = parseArrayItems(node.expr.expr.args[1].value.items)
          // console.log(className, propName, items)
          if (state.classes[className]) {
            state.classes[className][propName] = Object.assign(
              state.classes[className][propName] || {},
              items
            )
          }
        } else {
          // console.log(node.expr, propName)
        }
      }
      break

    default:
      // console.log('Node:', node.nodeType)
      break
  }
}

export function extractLoopTypeClasses(nodes) {
  const state = {
    classes: {},
  }
  walkNodes(nodes, extract, state)
  return state.classes
}
