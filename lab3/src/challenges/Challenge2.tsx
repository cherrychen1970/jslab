import axios from "axios";
import * as _ from 'lodash'
import { cloneElement, createElement, Fragment, useEffect, useState } from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import { dataProvider, ListView } from "./Challenge1";


// data provider
const url = "http://localhost:5000"

const Challenge = () => {
    const data = useGetList('users')
    const record = useGetOne('users', 1)
    return <div>
        <ListView
            basePath=''
            data={data}
            renderItem={(record) => `${record.id}: ${record.name}`}
        />
        <SingleView record={record} />
    </div>
}

// custom Hook to getList()
export const useGetList = (resource, filterValues = {}, perPage = 10) => {
    const [data, setData] = useState([])
    const [prevFilterValues, setPrevFilterValues] = useState<any>(null)

    useEffect(() => {
        console.log(filterValues)
        if (!_.isEqual(prevFilterValues, filterValues)) {
            dataProvider.getList(resource, filterValues, perPage)
                .then(data => setData(data))
            setPrevFilterValues(filterValues)
        }
    }, [ resource,filterValues,perPage ]
        //[resource,filterValues,perPage]
    )

    return data
}

// Challenge : implement get one hook.
export const useGetOne = (resource, id) => {
    const [record, setRecord] = useState({})

    const getOne = async () => {
        try {
            const response = await axios.get(`${url}/${resource}/${id}`);
            setRecord(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getOne()
    }, [resource])

    return record
}

// Challenge : impelment this.
const SingleView = ({ record }) => {
    return <span>Not imeplemented</span>
}

export default { title: 'Hooks', challenge: Challenge }
