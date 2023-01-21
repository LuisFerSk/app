export const product = {
    serial: "342423423",
    connection_type: "directa",
    storage_system: "interno",
    condition: "nuevo",
    owner: "RF",
    location: "Almacen palmira",
    manufacturer: "yes",
    purchase: "2022-07-28 03:08:49.340514",
    i_max: 6345.654,
    i_b: 21.5,
    i_n: 876.5,
    seals: 545.65
}

export const connectionsTypes = [
    {
        value: "directa",
        label: "Direct"
    },
    {
        value: "semi-directa",
        label: "Semi-direct"
    },
    {
        value: "indirecta",
        label: "Hint"
    },
]

export const storagesSystem = [
    {
        value: "interno",
        label: "Internal"
    },
    {
        value: "externo",
        label: "External"
    },
]

export const conditions = [
    {
        value: "nuevo",
        label: "New"
    },
    {
        value: "usado",
        label: "Used"
    },
]

export const owners = [
    {
        value: "RF",
        label: "RF"
    },
    {
        value: "OR",
        label: "OR"
    },
]

export const condition: Record<any, string> = {
    nuevo: "new",
    usado: "used"
}


export const connectionType: Record<any, string> = {
    directa: "direct",
    "semi-directa": "semi-direct",
    indirecta: "hint"
}

export const storageSystem: Record<any, string> = {
    interno: "internal",
    externo: "external"
}
