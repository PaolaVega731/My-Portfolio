import { useTranslation } from "react-i18next";
import FormContacto from './FormContacto';

function Contacto() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen text-center pt-24 lg:pt-32">
      <div className="flex justify-center pb-10">
        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl pt-10">
          {t("contact")}
        </h1>
      </div>
      <div className="flex justify-center items-center pb-8 text-lg lg:text-xl 2xl:text-2xl">
        <img className="w-12 h-12" src="data:image/png;base64,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"></img>
        <a
          href="mailto:paolavegadev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paolavegadev@gmail.com
        </a>
      </div>

      <div className="flex justify-center gap-4 ">
        <a
          href="https://wa.me/+59897192004?text=Hola%20Paola%2C%20quiero%20contactarte"
          className=" inline-block hover:scale-110 duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            ></path>
            <path
              fill="#fff"
              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            ></path>
            <path
              fill="#fff"
              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
            ></path>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/paola-vega-578093149/"
          className=" h-10 w-10 inline-block hover:scale-110 duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0078d4"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
            ></path>
            <path
              d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
              opacity=".05"
            ></path>
            <path
              d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
              opacity=".07"
            ></path>
            <path
              fill="#fff"
              d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
            ></path>
          </svg>
        </a>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="44"
            height="44"
            viewBox="0 0 50 50"
          >
            <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
          </svg>
          <span>(+598) 097192004</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 pb-8 text-lg lg:text-xl 2xl:text-2xl text-left">
      <FormContacto />
    </div>
    </div>
    
  );
}

export default Contacto;
