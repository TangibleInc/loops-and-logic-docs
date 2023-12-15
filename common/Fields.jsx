import React from 'react'

const pluck = (obj, keys) =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})

export function FieldsList({ fields = {}, include, exclude }) {
  return (
    <ul>
      {Object.keys(include ? pluck(fields, include) : fields)
        .filter(key => !exclude || !exclude.includes(key))
        .sort()
        .map((key) => (
          <li key={key}>
            <p>
              {!fields[key] ? (
                `Key not found ${key}`
              ) : (
                <>
                  <code>{key}</code> - {fields[key].description}
                  {(fields[key].type || fields[key].default) && (
                    <>
                      <br />
                      <small>
                        {fields[key].type &&
                          `Loop type: ${
                            Array.isArray(fields[key].type)
                              ? fields[key].type.join(', ')
                              : fields[key].type
                          }`}
                        {fields[key].default &&
                          `${fields[key].type && ' - '}Default: ${
                            fields[key].default
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
