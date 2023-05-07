import s from "./AuthLayout.css"
export const AuthLayout = ({ children }) => {
    
//   const header = (
//     <div className={s.header}>
//       <LogoSVG className={s.logoTop} />
//       <h3 className={s.logoTitle}>Notomatic</h3>
//     </div>
//   );
//   const background = (
//     <div>
//       <div className="d-flex">
//         <LogoSVG className={s.logo} />
//         <h1 className={s.backgroundTitle}>Notomatic</h1>
//       </div>
//       <p style={{ color: "white" }}>One place for the team notes</p>
//     </div>
//   );
  return (
    <div className={'formRoot'}>
      <div className={s.mainSection}>{children}</div>
    </div>
  );
};