import Style from "./Settings.module.sass";

const Settings = (props: any) => (
    <svg
        viewBox="0 0 591 591"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
        }}
        {...props}
    >
        <path
            d="M102.377 139.467h385.797M102.377 295.276h385.797M102.377 451.084h385.797"
            className={Style.settings}
        />
    </svg>
)

export default Settings
