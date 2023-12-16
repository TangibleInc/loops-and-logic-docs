import React from 'react'

const pluck = (obj, keys) =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})

export function QueryArgsList({ args = {}, include, exclude }) {
  return (
    <ul>
      {Object.keys(include ? pluck(args, include) : args)
        .filter(key => !exclude || !exclude.includes(key))
        .sort()
        .map((key) => (
          <li key={key}>
            <p>
              {!args[key] ? (
                <span style={{ color: 'red' }}>Key not found {key}</span>
              ) : (
                <>
                  <code>{key}</code> - {args[key].description}
                  {(args[key].type || args[key].default) && (
                    <>
                      <br />
                      <small>
                        {args[key].type &&
                          `Type: ${
                            Array.isArray(args[key].type)
                              ? args[key].type.join(', ')
                              : args[key].type
                          }`}
                        {args[key].default &&
                          `${args[key].type && ' - '}Default: ${
                            args[key].default
                          }`}
                      </small>
                    </>
                  )}
                </>
              )}
            </p>
          </li>
        ))}
    </ul>
  )
}
