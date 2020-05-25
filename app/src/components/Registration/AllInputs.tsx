import React from 'react'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import RadioButtons from './RadioButtons'
import TextInput from './TextInput'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

const theme = createMuiTheme()

const AllInputs = (props: any) => {
    //checkbox
    const [checked, setChecked] = React.useState({
        yes: false,
        no: false,
    })
    const handleCheck = (event: any) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked })
    }

    //input, radio, dropdown, text
    const [value, setValue] = React.useState('')
    const [text, setText] = React.useState('')

    const handleChange = (event: any) => {
        setValue(event.target.value)
    }

    const handleText = (event: any) => {
        setText(event.target.value)
    }

    return (
        //theme provider can wrap in questions component
        <ThemeProvider theme={theme}>
            <div style={{ padding: '5em' }}>
                <div
                    style={{
                        border: `1px solid black`,
                        margin: `1em`,
                        padding: `1em`,
                    }}
                >
                    <Checkbox
                        options={['yes', 'no']}
                        label={`check me`}
                        helperText={`checked input`}
                        onChange={(event) => {
                            handleCheck(event)
                        }}
                    ></Checkbox>
                </div>
                <div
                    style={{
                        border: `1px solid black`,
                        margin: `1em`,
                        padding: `1em`,
                    }}
                >
                    <Dropdown
                        id={`demo-simple-select-outlined-label`}
                        labelId={`demo-simple-select-outlined-label`}
                        label={`Age`}
                        options={['10', '20']}
                        value={value}
                        helperText={`dropdown`}
                        onChange={(event) => {
                            handleChange(event)
                        }}
                    ></Dropdown>
                </div>

                <div
                    style={{
                        border: `1px solid black`,
                        margin: `1em`,
                        padding: `1em`,
                    }}
                >
                    <RadioButtons
                        id={'1'}
                        options={['yes', 'no']}
                        name={`test`}
                        value={value}
                        ariaLabel={`test`}
                        formLabel={`radio buttons`}
                        onChange={(event) => {
                            handleChange(event)
                        }}
                    ></RadioButtons>
                </div>

                <div
                    style={{
                        border: `1px solid black`,
                        margin: `1em`,
                        padding: `1em`,
                    }}
                >
                    <TextInput
                        id={'1'}
                        label={`text-field`}
                        name={`test`}
                        type={`text`}
                        value={text}
                        placeholder={`test`}
                        onChange={(event) => {
                            handleText(event)
                        }}
                    ></TextInput>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default AllInputs
