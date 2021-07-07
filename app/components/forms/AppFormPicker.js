import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import { ErrorMessage } from './ErrorMessage'

export function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <React.Fragment>
            <AppPicker items={items} numberOfColumns={numberOfColumns} onSelectItem={(item) => setFieldValue(name,item)} PickerItemComponent={PickerItemComponent} placeholder={placeholder} selectedItem={values[name]} width={width} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    )
}