import React, { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import Icons from "components/icons";

interface IVarParams
{
    get: (key: string) => any;
    set: (value: any) => void;
}

interface IStepProps
{
    varParams: IVarParams;
    startStep?: number;
}

interface IStepData
{
    step: number | undefined;
}

const doStep = ({ varParams, startStep = 1 }: IStepProps) =>
{
    const registration: IStepData = varParams.get("registration");

    const goStep = (step: number) =>
    {
        varParams.set({
            registration: {
                ...varParams.get("registration"),
                step,
            },
        });
    };

    const prevStep = () =>
    {
        goStep(registration.step! - 1);
    };

    const nextStep = () =>
    {
        goStep(registration.step! + 1);
    };

    if (registration.step === undefined) {
        goStep(startStep);
    }

    return {
        nextStep,
        prevStep,
        goStep,
    };
};

const Nav: React.FC<{ stepAmount: number; varParams: IVarParams }> = ({
    stepAmount,
    varParams,
}) =>
{
    const navigate = useNavigate();
    const registration: IStepData = varParams.get("registration");
    const { prevStep } = doStep({ varParams });

    return (
        <div className="steps-nav-wrap">
            <div className="steps-nav-back">
                <button
                    onClick={() =>
                        registration.step === 1 ? navigate(-1) : prevStep()
                    }
                >
                    <Icons.Arrow />
                </button>
            </div>

            <ul className="steps-nav">
                {[ ...Array(stepAmount) ].map((x, i) =>
                {
                    let stepClass = "";

                    if (registration.step === i + 1) {
                        stepClass = "active";
                    } else if (i + 1 < registration.step!) {
                        stepClass = "finished";
                    }

                    return (
                        <li key={i} className={`steps-nav-step ${stepClass}`}>
                            {i + 1}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

interface StepsNavProps
{
    varParams: IVarParams;
    inMainHeader?: boolean;
    children: ReactNode[];
}

const StepsNav: React.FC<StepsNavProps> = ({
    varParams,
    inMainHeader = false,
    children,
}) =>
{
    useEffect(() =>
    {
        varParams.set({
            headerClass: inMainHeader ? [ "logo-off" ] : [],
            leftHeaderControl: inMainHeader ? (
                <Nav stepAmount={children.length} varParams={varParams} />
            ) : (
                false
            ),
        });

        return () =>
        {
            varParams.set({
                headerClass: [],
                leftHeaderControl: false,
            });
        };
    }, [ children.length, inMainHeader, varParams ]);

    const step = varParams.get("registration").step;
    const { nextStep } = doStep({ varParams });

    return (
        <>
            {!inMainHeader && (
                <Nav stepAmount={children.length} varParams={varParams} />
            )}
            {step &&
                React.cloneElement(children[ step - 1 ] as React.ReactElement, {
                    submitAction: nextStep,
                })}
        </>
    );
};

export default StepsNav;
