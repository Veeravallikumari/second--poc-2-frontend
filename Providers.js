import React from 'react';
import "./Providers.css";

function Providers() {
    
    return (
        <div>
            <div className='providerTable'>
                <button className='addButton' >Add Provider</button>
                <table border={1} cellpadding={15} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Region</th>
                            <th>Contact Info</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>1.</td>
                        <td>kumari</td>
                        <td>heart</td>
                        <td>hyd</td>
                        <td>9866120146</td>
                        <td>
                            <button className='actionButtons' ><i class="bi bi-trash"></i></button>
                            <button className='actionButton'><i class="bi bi-pen"></i></button>
                        </td>
                    </tbody>
                </table>
            </div>
            </div>

    )
}

export default Providers;