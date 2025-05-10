"use client"

type errorPageProps = {
    error:Error
}

const error : React.FC<errorPageProps> = ({error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default error