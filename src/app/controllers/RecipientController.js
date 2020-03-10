import * as Yup from 'yup';
import Recipient from '../models/Recipient';
import User from '../models/User';

class RecipientController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            zip_code: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.string().required(),
            complement: Yup.string(),
            state: Yup.string().required(),
            city: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const logged = await User.findOne({
            where: { id: req.userId },
        });

        console.log(logged);

        if (logged && logged.email !== 'admin@fastfeet.com') {
            return res.status(400).json({ error: 'Admin must be logged' });
        }

        const {
            id,
            name,
            zip_code,
            street,
            number,
            complement,
            state,
            city,
        } = await Recipient.create(req.body);

        return res.json({
            id,
            name,
            zip_code,
            street,
            number,
            complement,
            state,
            city,
        });
    }

    // async update(req, res) {}
}

export default new RecipientController();
