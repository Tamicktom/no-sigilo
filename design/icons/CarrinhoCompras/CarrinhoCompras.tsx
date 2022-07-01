import Style from './CarrinhoCompras.module.sass';

const CarrinhoCompras = (props: any) => (
    <svg
        viewBox="0 0 591 591"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
        }}
        {...props}
    >
        <path d="M531.496 124.739H199.415l49.812 216.667h232.457l49.812-216.667Z"
            className={Style.carrinho}
        />
        <path d="m140.17 167.619 43.867 210.067c2.299 11.008 12.679 18.274 23.644 16.893.881.111 1.78.168 2.692.168h281.102c11.833 0 21.44-9.607 21.44-21.44 0-11.833-9.607-21.44-21.44-21.44H222.451L178.583 141.8c-2.323-11.128-12.907-18.432-24.006-16.845a21.675 21.675 0 0 0-3.054-.216H80.495c-11.833 0-21.44 9.607-21.44 21.44 0 11.833 9.607 21.44 21.44 21.44h59.675Z"
            className={Style.carrinho}
        />
        <circle cx={219.235} cy={435.51} r={30.302}
            className={Style.carrinho}
        />
        <circle cx={482.613} cy={435.51} r={30.302}
            className={Style.carrinho}
        />

    </svg>
)

export default CarrinhoCompras
