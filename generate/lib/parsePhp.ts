import { createPhp } from '@expreva/php-parser'

let php

export async function parsePhp(content) {
  if (!php) {
    php = await createPhp()
  }
  return await php.parse(content)
}

export function walkNodes(nodes, callback, ...args) {
  const childWalk = (childNodes) =>
    walkNodes(childNodes, callback, ...args)
  for (const node of nodes) {
    callback(node, childWalk, ...args)
  }
}

export function parseArrayItems(items) {
  if (items[0] && items[0].key === null) {
    const arr = []
    for (const item of items) {
      if (item.nodeType === 'ArrayItem') {
        if (!item.key) {
          arr.push(parseNodeValue(item.value))
        }
      }
    }
    return arr
  }

  const obj = {}
  for (const item of items) {
    if (item.nodeType === 'ArrayItem') {
      const key = parseNodeValue(item.key)
      const value = parseNodeValue(item.value)
      obj[key] = value
    }
  }
  return obj
}

export function parseNodeValue(node) {
  if (!node) return
  switch (node.nodeType) {
    case 'Scalar_Int':
    // fall through
    case 'Scalar_String':
      return node.value
    case 'Expr_Array':
      return parseArrayItems(node.items)
    default:
      // console.log('Unknown node type', node.nodeType)
      break
  }
}
