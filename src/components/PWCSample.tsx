import { PropsWithChildren } from "react"

// export interface Props{
//     heading: string
// }

const PWCSample = (props: PropsWithChildren<Props>) => {
   return (
      <div>
         <h2>{props.heading}</h2>
         {props.children}
      </div>
   )
}

export default PWCSample