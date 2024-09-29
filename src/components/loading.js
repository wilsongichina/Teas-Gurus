import React from "react"
import { CircularProgress } from "@mui/material"

const Loading = React.memo(() => (
  <div className="flex justify-center items-center min-h-[100vh] w-full">
    <CircularProgress />
  </div>
))

export default Loading