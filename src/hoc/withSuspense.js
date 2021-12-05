import Preloader from "../components/common/Preloader/Preloader";
import React from "react";
import {Suspense} from 'react';

export const withSuspense = (Component) => {
    return (props) => {
        return (
                <Suspense fallback={<Preloader/>}>
                    <Component {...props}/>
                </Suspense>
            )
    }
}