import {body} from 'express-validator';

export const movieCreateValidation = () => {
    return [
        body('title')
            .notEmpty().withMessage('O campo é obrigatório.')
            .isString().withMessage('O campo tem que ser do tipo string.')
            .isLength({min: 5}).withMessage('O título precisa ter no mínimo ter 5 caracteres.'),
        body('rating')
            .notEmpty().withMessage('O campo é obrigatório.')
            .isNumeric().withMessage('O campo tem que ser do tipo number.')
            .custom((value: number) => {
                if(value < 0 || value > 10)
                    throw new Error('O campo só aceita valores entre 0 e 10.')
                return true;
            }),
        body('description')
            .notEmpty().withMessage('O campo é obrigatório.')
            .isString().withMessage('O campo tem que ser do tipo string.'),
        body('director')
            .notEmpty().withMessage('O campo é obrigatório.')
            .isString().withMessage('O campo tem que ser do tipo string.'),
        body('stars')
            .optional()
            .isArray().withMessage('O campo tem que ser do tipo array.'),
        body('poster')
            .isURL().withMessage('A imagem precisa ser uma URL.')
    ]
}