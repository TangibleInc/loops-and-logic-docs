import { walkNodes } from './parsePhp.js'

/**
 * Gather Docblock comments and the function name, argruments, class proerties, methods
 */
export async function gatherDocBlocks(parsed) {
  const comments = []

  walkNodes(parsed, (node, childWalk) => {
    if (!node?.attributes?.comments) return

    const [comment] = node?.attributes?.comments
    const {
      nodeType: commentType, // Comment or Comment_Doc
      text,
    } = comment

    if (commentType !== 'Comment_Doc') return

    // console.log('Node', inspect(node, {
    //   colors: true
    // }))

    switch (node.nodeType) {
      case 'Stmt_Function':
        if (node.name && node.name.nodeType === 'Identifier') {
          console.log('Function:', node.name.name)
          console.log(text)
        }
        break
      case 'Stmt_ClassMethod':
        if (node.name && node.name.nodeType === 'Identifier') {
          console.log('Class method:', node.name.name)
          console.log(text)
        }
        break
      case 'Stmt_Expression':
        if (node.expr && node.expr.nodeType === 'Expr_Assign') {
          // $var->method = function() {};

          if (
            node.expr.var &&
            node.expr.var.name &&
            node.expr.var.name.nodeType === 'Identifier'
          ) {
            console.log('Statement Function:', node.expr.var.name.name)
            console.log(text)
          } else {
            // console.log('Statement', node.expr.var)
            // console.log(node.expr.expr)
          }
        }
        break
      case 'Stmt_Nop': // No operation
      default:
        break
    }

    console.log()
  })
}
