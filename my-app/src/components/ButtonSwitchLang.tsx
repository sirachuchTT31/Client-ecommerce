'use client'
import { FormControl, MenuItem, Select } from "@mui/material";
import React, { } from "react";
import { setUserLocale } from '@/shared/services/locale.service';
import clsx from 'clsx';
import { defaultLocale } from "@/i18n/config";
const ButtonSwitchLang: React.FC = () => {
    const [isPending, startTransition] = React.useTransition();
    const [language, setLanguage] = React.useState<string>("");

    React.useEffect(() => {
        setLanguage(defaultLocale);
    }, [])

    const handlerLang = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = event.target.value;
        setLanguage(event.target.value);
        // React state trasnsition before set locale
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return <>
        <FormControl >
            <Select
                sx={{ width: 100, height: 40 }}
                labelId="demo-simple-select-label"
                placeholder="Language"
                id="demo-simple-select"
                value={language}
                onChange={handlerLang}
                className={clsx(
                    'rounded-sm p-2 transition-colors hover:bg-slate-200',
                    isPending && 'pointer-events-none opacity-60'
                )}
            >
                <MenuItem value={'th'}>TH</MenuItem>
                <MenuItem value={'en'}>EN</MenuItem>
            </Select>
        </FormControl>
    </>
}

export default ButtonSwitchLang;
