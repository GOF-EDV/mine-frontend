import * as React from "react"

const Logo = (props) => (
  <svg
    height="64px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="133.031 9.2 233.938 131.6"
    style={{
      background: "0 0",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <filter id="a">
        <feGaussianBlur stdDeviation={4} in="SourceAlpha" result="blur" />
        <feSpecularLighting
          surfaceScale={5}
          specularConstant={0.8}
          specularExponent={7.5}
          lightingColor="#7aacd1"
          in="blur"
          result="specular"
        >
          <fePointLight x={-250} y={-50} z={300} />
        </feSpecularLighting>
        <feComposite
          operator="in"
          in="specular"
          in2="SourceAlpha"
          result="comp"
        />
        <feComposite
          in="SourceGraphic"
          in2="comp"
          operator="arithmetic"
          k2={1}
          k3={1}
        />
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="M176.47 98.03V51.97h7.63l12.37 28.43v11.57h-2L184.1 66.34v31.69h-7.63Zm22.56-17.5 12.38-28.56h7.62v46.06h-7.62V66.34L201.1 91.97h-2.07V80.53Zm39.25-28.56v46.06h-7.62V51.97h7.62Zm37.19 31.75V51.97h7.63v46.06h-7.63l-15.5-27.25V56.4l15.5 27.32Zm-18.06 14.31h-7.63V51.97h7.63v46.06Zm37.31 0V51.97h7.63v46.06h-7.63Zm26.88-25.88v5.13h-16.69v-5.13h16.69Zm-16.69 25.88v-5.69h18.62v5.69h-18.62Zm0-46.06h18.62v5.68h-18.62v-5.68Z"
        fill="#1d7ed1"
      />
    </g>
  </svg>
)

export default Logo
