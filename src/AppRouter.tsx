import React from "react"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Homepage } from "./components/Homepage/Homepage"

const AppRouter: FC = () => (
  <Routes>
    <Route path="" element={<Homepage />} />
  </Routes>
)

export default AppRouter