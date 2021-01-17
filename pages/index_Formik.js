import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Typography, Slider, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'

export default function Home() {

  const marks = [
    {
      value: 20,
      label: 'low',
      text: 'Your downside is limited to 20% of your portfolio.',
    },
    {
      value: 50,
      label: 'medium',
      text: 'You may lose up to 50% of your portfolio.'
    },
    {
      value: 100,
      label: 'high',
      text: 'Your entire portfolio is at risk!'
    },
  ];

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

          <h2>What is your risk tolerance level?</h2>

          <Formik
            initialValues={{ riskLevel: marks[0].value }}
            onSubmit={(data) => {
              console.log(data)

            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form>
                <Typography id="discrete-slider-restrict" gutterBottom>
                  Risk tolerance determines what % of your money to expose.
                </Typography>

                <Slider
                  defaultValue={marks[0].value}
                  aria-labelledby="discrete-slider-restrict"
                  step={null}
                  valueLabelDisplay="auto"
                  marks={marks}
                  value={values.riskLevel}
                  name="riskLevel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Typography id="discrete-slider-restrict" gutterBottom>
                  {marks[marks.map(i => i.value).indexOf(values.riskLevel)].text}
                </Typography>

                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => { }}
                >
                  Next
              </Button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            )}
          </Formik>

        </Container>

      </main>

      <footer className={styles.footer}>
        Disclaimer: Not investment advice. For information purposes only.
      </footer>
    </>
  )
}