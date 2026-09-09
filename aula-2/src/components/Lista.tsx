type ListaProps = {
  items:string[]
}

export default function Lista({items}:ListaProps) {

  return (
    <li>
      {items.map((item,id) => <ul key={id}>{item}</ul>)}
    </li>
  )
}


// type ListaProps = {
//   items:string[]
// }

// export default function Lista(props:ListaProps) {

//   return (
//     <>
//     <li>
//       <ul>{props.items.map(items => <ul>{items}</ul>)}</ul>
//     </li>
//     </>
//   )
// }
