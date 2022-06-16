import { Switch } from '@headlessui/react';
import { useState } from "react";

export default function Theme() {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="flex my-auto">
            <div>

            </div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-blue-700' : 'bg-blue-500'}
            relative inline-flex h-[20px] w-[48px] shrink-0 cursor-pointer rounded-full   transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 `}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-[28px]' : 'translate-x-0'}
              pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-slate-200 shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}