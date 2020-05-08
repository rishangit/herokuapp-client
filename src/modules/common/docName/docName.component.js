import React from 'react';

const DoctorName = ({doctor}) =>{

  return (
    <div>{doctor.firstName} {doctor.lastName} ({doctor.qulification}){' '}</div>
  )

}
export default DoctorName