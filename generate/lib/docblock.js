import { walkNodes } from './parsePhp.js'

/**
 * Gather Docblock comments and the function name, arguments, class proerties, methods
 */
export async function gatherDocBlocks(parsed) {

  const docblocks = []

  walkNodes(parsed, (node, childWalk) => {
    if (!node?.attributes?.comments) return

    const [comment] = node?.attributes?.comments
    const {
      nodeType: commentType, // Comment or Comment_Doc
    } = comment

    if (commentType !== 'Comment_Doc') {
      // Ignore single-line comments
      // console.log(commentType, node)
      return
    }

    const text = parseComment(comment.text)

    // console.log('Node', inspect(node, {
    //   colors: true
    // }))

    switch (node.nodeType) {
      case 'Stmt_Function':
        if (node.name && node.name.nodeType === 'Identifier') {
          console.log(`Function ${node.name.name}()`)
          console.log(text)
        }
        break
      case 'Stmt_Class':
        if (node.name && node.name.nodeType === 'Identifier') {
          console.log(`Class ${node.name.name}`) // TODO: Extends
          console.log(text)
        }
        break
      case 'Stmt_ClassMethod':
        if (node.name && node.name.nodeType === 'Identifier') {
          console.log(`Class method ${node.name.name}`)
          console.log(parseComment(text))
        }
        break
      case 'Stmt_Expression':
        if (node.expr && node.expr.nodeType === 'Expr_Assign') {
          // $var->method = function() {};
          if (
            // Function being assigned
            node.expr.var &&
            node.expr.var.name &&
            node.expr.var.name.nodeType === 'Identifier' &&
            // Target variable name
            node.expr.var.var &&
            node.expr.var.var.nodeType === 'Expr_Variable'
          ) {
            console.log(
              'Dynamic method',
              `$${node.expr.var.var.name}->${node.expr.var.name.name}()`
            )
            console.log(text)
            // console.log(node.expr)
          } else {
            // console.log('Statement', node.expr.var)
            // console.log(node.expr.expr)
          }
        }
        break
      case 'Stmt_Nop': // No operation - Free standing comment
        break
      default:
        console.log('Unknown node type', node.nodeType)
        break
    }

    console.log()
  })

  return docblocks
}

function parseComment(text) {
  return text.replace(/\n\s+\*/g, '\n *')
}
