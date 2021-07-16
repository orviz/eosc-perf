import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { SearchForm } from './searchForm';
import { Table } from './table';
import { LoadingOverlay } from '../loadingOverlay';
import { Benchmark } from '../../api';
import { getHelper } from '../../api-helpers';

type PageProps = {
    token: string;
};

function Page(props: PageProps) {
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    // put token in state
    const [token, setToken] = useState(props.token);
    // propagate props to state for token update
    useEffect(() => {
        setToken(props.token);
    }, [props.token]);

    let { status, isLoading, isError, data, isSuccess } = useQuery(
        'benchmarkSearch',
        () => {
            return getHelper<Benchmark[]>('/benchmarks', props.token);
        },
        {
            enabled: !!token,
            refetchOnWindowFocus: false, // do not spam queries
        }
    );
    return (
        <div className="container">
            <h1>Benchmark Search</h1>
            <SearchForm />
            <div style={{ position: 'relative' }}>
                {isLoading && <LoadingOverlay />}
                <Table
                    results={
                        /*data ? data.slice(page * resultsPerPage, page * (resultsPerPage + 1)) :*/ []
                    }
                />
            </div>
        </div>
    );
}

const BenchmarkSearchModule = {
    path: '/benchmark-search',
    element: Page,
    name: 'BenchmarkSearch',
    dropdownName: 'Benchmarks',
};

export default BenchmarkSearchModule;
