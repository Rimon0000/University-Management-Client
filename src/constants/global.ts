export const monthNames = ['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December',]

export const monthOptions = monthNames.map(month => ({
    value: month,
    label: month
}))

export const gender = ["Male", "Female" , 'Other']

export const genderOptions = gender.map((item) => ({
    value: item.toLowerCase(),
    label: item
}))

export const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

export const bloodGroupOptions = bloodGroup.map((blood) => ({
    value: blood,
    label: blood
}))

