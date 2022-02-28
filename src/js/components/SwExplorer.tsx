import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from "../utils/useFetch";
import Button from "@mui/material/Button";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { queryTypes, maxPages } from "../utils/knownData";
import SwEntry from "./SwEntry";


const showFetchMoreBtn = (pageNo: number, dataType: string) => {
    return pageNo < maxPages[dataType];
};

const initialisePageNoState = () => {
    return {
        'characters': 1,
        'movies': 1,
        'planets': 1,
    }
};

const initialiseDataState = () => {
    return {
        'characters': [],
        'movies': [], 
        'planets': [],
    }
};

interface swProps {
	dataType: string;
}

export default function SwExplorer(props: swProps) {
    const dataType = props.dataType;
    const [pageNo, setPageNo] = useState(initialisePageNoState());
    const [swData, setSwData] = useState(initialiseDataState());

    let loading = true, 
        error: string;
        
    [loading, error] = useFetch(queryTypes[dataType], pageNo[dataType], (data: []) => {
        setSwData(state => ({ ...state, [dataType]: [...swData[dataType], ...data]}));
    });
    
    const getSwData = () => {
        // Spreading "...state" ensures we don't "lose" pageNo and fetched data of the other types (subpages)
        setPageNo(state => ({ ...state, [dataType]: state[dataType] + 1 }));
    };

    return (
        <div className="entries__wrapper">
            <div className="entries">
            {
                swData[dataType]?.map((entry: object, idx: number) => (
                    <SwEntry type={dataType} data={entry} key={idx}/>
                ))
            }
            </div>
            <div className="extras">
                { error ? error : '' }
                { loading ?  <CircularProgress className="loader"></CircularProgress>  : '' }
            </div>
            {(showFetchMoreBtn(pageNo[dataType], dataType) && !error && !loading) ? 
                <p>
                    <Button variant="contained" onClick={() => {
                        getSwData()
                    }} className="btn" endIcon={<AutorenewIcon />}>Fetch more data</Button>
                </p>
                : ''
            }
        </div>
    )
}  