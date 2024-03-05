import React from 'react'
import { Route } from 'react-router'
import Home from '../Home'
import Settings from '../Settings'

export default function Routes() {
    return (
        <div>
            <Routes>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>

            </Routes>

        </div>
    )
}
