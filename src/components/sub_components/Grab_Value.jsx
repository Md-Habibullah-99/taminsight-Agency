


export default function Grab_Value({ content = [] }) {
  return (
    <div className="free_value">
      {
        content.map((line, idx) => (
          <div key={idx} className="free_value-content">{line}</div>
        ))
      }
    </div>
  )
}

