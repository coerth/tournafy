import React from 'react'

type Props = {
    array: any[];
    onChange: any
  };

const Dropdown:React.FC<Props> = ({array, onChange}): JSX.Element => {

  return (
    <div>
        <select
            className="dropdown"
            name="dropdown"
            id="dropdown"
            onChange={onChange}
          >
            {array &&
              array.map((item) => (
                <option
                  key={item._id}
                  value={array.find(x => x._id === item._id)._id}
                >
                  {item.name}
                </option>
              ))}
          </select>
    </div>
  )
}

export default Dropdown