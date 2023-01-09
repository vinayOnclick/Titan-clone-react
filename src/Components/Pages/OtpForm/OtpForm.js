import { Box, styled } from '@mui/material'
import React from 'react'
import './OtpForm.scss'


const BoxWrapper = styled(Box)`
    
`
const OtpForm = () => {
  return (
    <>
      <Box>
      <h2>ENTER MOBILE OTP</h2>
      <p>OTP SEND TO </p>
      <input placeholder='ENTER OTP*'></input>
      <button>VERFIY OTP</button>
      </Box>
    </>
  )
}

export default OtpForm
