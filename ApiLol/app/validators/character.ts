import vine from '@vinejs/vine'

export const createCharacterValidator = vine.compile(
    vine.object({
        name: vine.string().trim(),
        region: vine.string().trim(),
        resource: vine.string().trim(),
        year: vine.number(),
        type: vine.string().trim()
    })
)