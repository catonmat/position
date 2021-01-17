import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Checkbox, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText } from '@material-ui/core'
import { useState } from 'react'
import { riskLevelMarks, investmentPeriodMarks, sectors } from './data.js'
import { CustomSlider } from '../components/CustomSlider.js'
import { CustomButton } from '../components/CustomButton.js'

export default function Home() {

  //state variables:
  const [step, setStep] = useState(1)
  const [riskLevel, setRiskLevel] = useState(riskLevelMarks[0].value)
  const [investmentPeriod, setInvestmentPeriod] = useState(investmentPeriodMarks[1].value)
  const [sectorsArray, setSectors] = useState(sectors.map(obj => ({ ...obj, checked: false })))

  //proceed to next step:
  const nextStep = () => {
    setStep(step + 1)
  }

  //go back to previous step:
  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <>
      <Head>
        <title>Position or Ban!</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Position or Ban!
        </h1>

        <p className={styles.description}>
          Find YOLO opportunities based on your risk level, time preference, and sector interest.
        </p>

        <Container maxWidth="sm">
          <form>
            {/* ***** Step 1 ***** */}
            <CustomSlider
              title='What is your risk tolerance level?'
              textTop='Risk tolerance determines what % of your money to expose.'
              marks={riskLevelMarks}
              value={riskLevel}
              handleChange={(e, newValue) => {
                setRiskLevel(newValue)
              }}
            />
            <CustomSlider
              title='How long are you looking to stay invested in your position?'
              textTop='Your time preference determines what expiry dates to pick.'
              marks={investmentPeriodMarks}
              value={investmentPeriod}
              handleChange={(e, newValue) => {
                setInvestmentPeriod(newValue)
              }}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Which sectors are you interested in investing?
              </FormLabel>
              <FormGroup>
                {sectorsArray.map((v, i) => {
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={sectorsArray[i].sector}
                        label={sectorsArray[i].label}
                        checked={sectorsArray[i].checked}
                        onChange={e => setSectors(sectorsArray => {
                          let newSectorsArray = []
                          sectorsArray.forEach((value, index) => {
                            newSectorsArray[index] = sectorsArray[index]
                            if (index == i) { newSectorsArray[index].checked = e.target.checked }
                          })
                          return newSectorsArray
                        })}
                      />
                    }
                  />
                })}
              </FormGroup>
              <FormHelperText>Pick one or more.</FormHelperText>
            </FormControl>

            <CustomButton />


            {/* ***** Step 2 ***** */}



          </form>
        </Container>

      </main>

      <footer className={styles.footer}>
        Disclaimer: Not investment advice. The information on this site is for entertainment purpose only.
      </footer>

    </>
  )
}