import Form from 'react-bootstrap/Form';
import { SUPPORTED_LANGUAGES } from '../constants';

export const LanguageSelector = ({ onLanguageChange }) => {
    return (
        <Form.Select aria-label='Select a language'>
            {Object.entries(SUPPORTED_LANGUAGES).map(([ key, literal ]) => (
                <option key={key} value={key}>
                {literal}
                </option>
            ))}
        </Form.Select>
    )
}