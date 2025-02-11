import React from 'react'

let month = 1000*60*60*24*30

function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function TableauVaccin(props) {
    let { ActiveBtn, DateNaissance, PremiereVisite, LastEdit, Patient } = props

    let DateNaissanceTime = new Date(DateNaissance).getTime()
    let PremiereVisiteTime = new Date(PremiereVisite).getTime()
    let LastEditTime = new Date(LastEdit).getTime()
    
    return (
        <>
            {
                ActiveBtn === 0 ?
                <Normal 
                    Patient={Patient}
                    DateNaissanceTime={DateNaissanceTime}
                    PremiereVisiteTime={PremiereVisiteTime}
                    LastEditTime={LastEditTime}
                /> :
                ActiveBtn === 1 ? 
                <AgeMoin1
                    Patient={Patient}
                    DateNaissanceTime={DateNaissanceTime}
                    PremiereVisiteTime={PremiereVisiteTime}
                    LastEditTime={LastEditTime}
                /> :
                ActiveBtn === 2 ? 
                <AgeMoin3
                    Patient={Patient}
                    DateNaissanceTime={DateNaissanceTime}
                    PremiereVisiteTime={PremiereVisiteTime}
                    LastEditTime={LastEditTime}
                /> : 
                <AgeMoin6
                    Patient={Patient}
                    DateNaissanceTime={DateNaissanceTime}
                    PremiereVisiteTime={PremiereVisiteTime}
                    LastEditTime={LastEditTime}
                />
            }

        </>
    )
}

let Normal = (props) => {
    let { DateNaissanceTime, PremiereVisiteTime, LastEditTime, Patient } = props

    return (
        <table className='normal'>
            <thead>
                <tr>
                    <th>Date de Vaccin</th>
                    <th>Les vaccins</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime )}</strong> - (première visite)</td>
                    <td>{Patient?.maternite ? '' : 'HB / '} BCG / VPO 1 / VITD 1</td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + month )}</strong> - (1 mois après dernière vaccin)</td>
                    <td>VPO 2 / PENTA 1 / ROTA 1</td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month + (month / 2)) )}</strong> - (15 jours après dernière vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 1</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (2 * month) )}</strong> - (15 jours après dernière vaccin)</td>
                    <td>VPO 3 / PENTA 2 / ROTA 2</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (3 * month) )}</strong> - (1 mois après dernière vaccin)</td>
                    <td>VPO 4 / PENTA 3 / ROTA 3 / VPI 1</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (3 * month + (month / 2)) )}</strong> - (15 jours après dernière vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 2</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month * 5) )}</strong> - (45 jours après dernière vaccin)</td>
                    <td> <small style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 3</small> {Patient?.premature && '(prématuré)'}  </small> / VITD 2 / VITA 1</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month * 8) )}</strong> - (3 mois après dernière vaccin)</td>
                    <td>RR 1 / VPI 2</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month * 11))}</strong> - (3 mois après dernière vaccin)</td>
                    <td> <small style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 4</small> {Patient?.premature && '(prématuré)'}  </small> / VITA 2</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month * 17))}</strong> - (6 mois après dernière vaccin)</td>
                    <td>VPO 5 / RR 2 / DTC 1 / VITA 3</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month * 60))}</strong> - (3 ans et 6 mois après dernière vaccin)</td>
                    <td>VPO 6 / DTC 2</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month * 132))}</strong> - (6 ans après dernière vaccin)</td>
                    <td>HPV 1</td>
                </tr>
            </tbody>
        </table>
    )
}

let AgeMoin1 = (props) => {
    let { DateNaissanceTime, PremiereVisiteTime, LastEditTime, Patient } = props

    return (
        <table className='normal'>
            <thead>
                <tr>
                    <th>Date de Vaccin</th>
                    <th>Les vaccins</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime)}</strong> - (première visite) </td>
                    <td>BCG / PENTA 1 / VPO 1 / VPI 1 / RR 1 / ROTA 1</td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month / 2))}</strong> - (15 jours après première vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 1</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + month )}</strong> - (1 mois après première vaccin)</td>
                    <td>PENTA 2 / VPO 2 / ROTA 2</td>
                </tr>
                <tr>
                    {/* <td>{ LastEditTime === PremiereVisiteTime ? formatDate(PremiereVisiteTime + (2 * month)) : formatDate(LastEditTime + month)}</td> */}
                    <td><strong>{ formatDate(PremiereVisiteTime + (2 * month)) }</strong> - (1 mois après dernière vaccin)</td>
                    <td>PENTA 3 / VPO 3 / ROTA 3</td>
                </tr>
                
                <tr>
                    {/* <td>{ LastEditTime === PremiereVisiteTime ? formatDate(PremiereVisiteTime + (2 * month) + (month / 2)) : formatDate(LastEditTime + (month / 2))}</td> */}
                    <td><strong>{ formatDate(PremiereVisiteTime + (2 * month) + (month / 2)) }</strong> - (15 jours après dernière vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 1</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
                
                <tr>
                    {/* <td>{ LastEditTime === PremiereVisiteTime ? formatDate(PremiereVisiteTime + (4 * month) + (month / 2)) : formatDate(LastEditTime + (2 * month))}</td> */}
                    <td><strong>{ formatDate(PremiereVisiteTime + (4 * month) + (month / 2)) }</strong> - (2 mois après dernière vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 3</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
            </tbody>
        </table>
    )
}

let AgeMoin3 = (props) => {
    let { DateNaissanceTime, PremiereVisiteTime, LastEditTime, Patient } = props

    return (
        <table className='normal'>
            <thead>
                <tr>
                    <th>Date de Vaccin</th>
                    <th>Les vaccins</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime)}</strong> - (première visite)</td>
                    <td>BCG / PENTA 1 / VPO 1 / VPI 1 / RR 1 / ROTA 1</td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month / 2) )}</strong> - (15 jours après première vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 1</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + month)}</strong> - (1 mois après première vaccin)</td>
                    <td>DTC 1 / HB 1 / VPO 2 / RR 2 / ROTA 2</td>
                </tr>
                <tr>
                    {/* <td>{ LastEditTime === PremiereVisiteTime ? formatDate(PremiereVisiteTime + (2 * month)) : formatDate(LastEditTime + month)}</td> */}
                    <td><strong>{ formatDate(PremiereVisiteTime + (2 * month))}</strong> - (1 mois après dernière vaccin)</td>
                    <td>VPO 3 / ROTA 3</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (4 * month) + (month / 2))}</strong> - (4 mois et 15 jours après première vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 2</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (10 * month))}</strong> - (10 mois après première vaccin)</td>
                    <td>HB 2</td>
                </tr>
            </tbody>
        </table>
    )
}

let AgeMoin6 = (props) => {
    let { DateNaissanceTime, PremiereVisiteTime, LastEditTime, Patient } = props

    return (
        <table className='normal'>
            <thead>
                <tr>
                    <th>Date de Vaccin</th>
                    <th>Les vaccins</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime)}</strong> - (première visite)</td>
                    <td>BCG / DTC 1 / HB 1 / VPO 1 / VPI 1 / RR 1</td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (month / 2))}</strong> - (15 après première vaccin)</td>
                    <td style={{ color: Patient?.premature ? '#f00' : '#000' }}><small style={{ textDecoration: Patient?.premature ? 'line-through' : '', color: Patient?.premature ? '#f00' : '#000' }}>PNEUMO 1</small> {Patient?.premature && '(prématuré)'} </td>
                </tr>
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + month)}</strong> - (1 mois après première vaccin)</td>
                    <td>DTC 2 / HB 2 / VPO 2 / RR 2</td>
                </tr>
                <tr>
                    {/* <td>{ LastEditTime === PremiereVisiteTime ? formatDate(PremiereVisiteTime + (2 * month)) : formatDate(LastEditTime + month)}</td> */}
                    <td><strong>{formatDate(PremiereVisiteTime + (2 * month))}</strong> - (1 mois après dernière vaccin)</td>
                    <td>VPO 3</td>
                </tr>
                
                <tr>
                    <td><strong>{formatDate(PremiereVisiteTime + (7 * month))}</strong> - (7 mois après première vaccin)</td>
                    <td>DTC 3 / HB 3 / VPO 4</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableauVaccin