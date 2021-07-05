import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from './AppPicker'
import { ErrorMessage } from '../components/forms/ErrorMessage'

export default function AppFormPicker({ items, name, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <React.Fragment>
            <AppPicker items={items} onSelectItem={(item) => setFieldValue(name,item)} placeholder={placeholder} selectedItem={values[name]} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({})