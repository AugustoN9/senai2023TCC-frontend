import React from 'react';

const Sidebar2 = () => {
  return (
    <div className="Sidebar">
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2' >
                <i className='bi bi-speedometer2 fs-5 me-2' ></i>
                <span className='fs-5'>Dashboard</span>
            </a>
            <a className='list-group-item py-2 ' >
                <i className='bi bi-house fs-4 me-2' ></i>
                <span className='fs-5'>Home</span>
            </a>
            <a className='list-group-item py-2 ' >
                <i className='bi bi-table fs-4 me-2' ></i>
                <span className='fs-5'>Solicitacoes</span>
            </a>
            <a className='list-group-item py-2 ' >
                <i className='bi bi-clipboard-data fs-4 me-2' ></i>
                <span className='fs-5'>Exames</span>
            </a>
            <a className='list-group-item py-2 ' >
                <i className='bi bi-search fs-4 me-2' ></i>
                <span className='fs-5'>Macroscopia</span>
            </a>
            <a className='list-group-item py-2' >
                <i className='bi bi-gear-wide-connected fs-4 me-2' ></i>
                <span className='fs-5'>Histoprocesso</span>
            </a>
            <a className='list-group-item py-2 ' >
                <i className='bi bi-file-earmark-text fs-4 me-2' ></i>
                <span className='fs-5'>Laudos</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar2
