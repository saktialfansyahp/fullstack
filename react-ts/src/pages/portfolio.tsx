import React from "react";
import profile from "../assets/img/Foto-Ijazah.jpg";
import pens from "../assets/img/Logo_PENS.png";
import building from "../assets/img/bangunan.png";
import disty from "../assets/img/disty.png";

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10 px-4">
            {/* Header */}
            {/* <header className="max-w-4xl w-full rounded-lg mt-6 p-4"> */}
            <header className="max-w-4xl w-full rounded-lg p-4 bg-white shadow-sm">
                {/* {" "}
                // Tambah shadow & background */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* {" "}
                    // Tambah gap untuk spacing yang konsisten */}
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-48 h-auto border-4 border-gray-300 rounded-lg object-cover" // Tambah rounded & object-cover
                    />
                    <div className="flex-1 text-center md:text-left break-words w-full">
                        {/* {" "}
                        // Tambah flex-1 */}
                        <div className="text-2xl font-bold cursor-pointer hover:text-gray-700">
                            {/* {" "}
                            // Tambah hover effect — */}
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            Sakti Alfansyah Putra
                        </h1>
                        <p className="text-gray-600 mt-2 text-justify leading-relaxed break-words max-w-full">
                            {/* {" "}
                            // Tambah leading-relaxed Saya memiliki pengalaman */}
                            Lulusan D3 Teknik Informatika dengan pengalaman
                            membangun aplikasi web menggunakan React,
                            TypeScript, Laravel Livewire, Tailwind CSS, dan
                            Express.js. Terbiasa mengembangkan sistem manajemen
                            stok semi-otomatis dan aplikasi absensi Android.
                            Tertarik mendalami prinsip clean code dan metodologi
                            Agile
                        </p>
                        <div className="mt-6 flex flex-1 justify-center md:justify-start space-x-4">
                            {/* Social Icons */}
                            <a
                                href="https://www.linkedin.com/in/sakti-alfansyah-putra-189498253/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                <div className="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#0288D1"
                                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                                        ></path>
                                        <path
                                            fill="#FFF"
                                            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                                        ></path>
                                    </svg>
                                    <p>LinkedIn</p>
                                </div>
                            </a>
                            <a
                                href="https://github.com/saktialfansyahp"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-800 hover:underline"
                            >
                                <div className="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 32 32"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                                        ></path>
                                    </svg>
                                    <p>Github</p>
                                </div>
                            </a>
                            <a
                                href="https://instagram.com/saktialfansyah"
                                target="_blank"
                                rel="noreferrer"
                                className="text-pink-600 hover:underline"
                            >
                                <div className="flex items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 48 48"
                                    >
                                        <radialGradient
                                            id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                                            cx="19.38"
                                            cy="42.035"
                                            r="44.899"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stop-color="#fd5"
                                            ></stop>
                                            <stop
                                                offset=".328"
                                                stop-color="#ff543f"
                                            ></stop>
                                            <stop
                                                offset=".348"
                                                stop-color="#fc5245"
                                            ></stop>
                                            <stop
                                                offset=".504"
                                                stop-color="#e64771"
                                            ></stop>
                                            <stop
                                                offset=".643"
                                                stop-color="#d53e91"
                                            ></stop>
                                            <stop
                                                offset=".761"
                                                stop-color="#cc39a4"
                                            ></stop>
                                            <stop
                                                offset=".841"
                                                stop-color="#c837ab"
                                            ></stop>
                                        </radialGradient>
                                        <path
                                            fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                        ></path>
                                        <radialGradient
                                            id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                                            cx="11.786"
                                            cy="5.54"
                                            r="29.813"
                                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stop-color="#4168c9"
                                            ></stop>
                                            <stop
                                                offset=".999"
                                                stop-color="#4168c9"
                                                stop-opacity="0"
                                            ></stop>
                                        </radialGradient>
                                        <path
                                            fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                                        ></path>
                                        <circle
                                            cx="31.5"
                                            cy="16.5"
                                            r="1.5"
                                            fill="#fff"
                                        ></circle>
                                        <path
                                            fill="#fff"
                                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                                        ></path>
                                    </svg>
                                    <p>Instagram</p>
                                </div>
                            </a>
                        </div>
                        <div className="mt-2 flex justify-center md:justify-start space-x-4">
                            <a
                                href="https://wa.me/6285334954057"
                                target="_blank"
                                rel="noreferrer"
                                className="text-green-600 hover:underline"
                            >
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="16"
                                        height="16"
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
                                            fill-rule="evenodd"
                                            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <p>Whatsapp</p>
                                </div>
                            </a>
                            <a
                                href="https://mailto:saktialfansyahp@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-800 hover:underline"
                            >
                                <div className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#4caf50"
                                            d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                                        ></path>
                                        <path
                                            fill="#1e88e5"
                                            d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                                        ></path>
                                        <polygon
                                            fill="#e53935"
                                            points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                                        ></polygon>
                                        <path
                                            fill="#c62828"
                                            d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                                        ></path>
                                        <path
                                            fill="#fbc02d"
                                            d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                                        ></path>
                                    </svg>
                                    <p>Mail</p>
                                </div>
                            </a>
                        </div>
                        <div className="mt-2 flex justify-center md:justify-start space-x-4">
                            <a
                                href="https://saktialfansyah.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-800 hover:underline"
                            >
                                <div className="flex items-center space-x-2">
                                    <img
                                        width="16"
                                        height="16"
                                        src="https://img.icons8.com/material-rounded/16/link--v1.png"
                                        alt="link--v1"
                                    />
                                    <p>https://saktialfansyahp.vercel.app/</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Pengalaman Kerja */}
            <section className="max-w-4xl w-full rounded-lg mt-6 p-4 bg-white shadow-sm">
                <h2 className="text-xl font-bold mb-4">Pengalaman Kerja</h2>

                <div className="space-y-6 text-justify">
                    {/* Job 1 */}
                    <div>
                        <div className="flex space-x-0 md:space-x-4">
                            <div className="flex-none w-20 hidden md:block">
                                <img
                                    src={building}
                                    alt=""
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    WEB PROGRAMMER - PT. Alucio Net
                                </h3>
                                <p className="text-gray-500">
                                    Juli 2024 - Present
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-2">
                                    {/* <li>
                                        Pengembangan Website berbasis PHP dengan
                                        fitur manajemen stok berbasis QR code.
                                    </li>
                                    <li>
                                        Memungkinkan pemantauan dan validasi
                                        stok secara semi-otomatis.
                                    </li> */}
                                    <li>
                                        Mengembangkan sistem produksi web
                                        terintegrasi dengan scanner & timbangan.
                                    </li>
                                    <li>
                                        Menyelesaikan sistem scan barcode keluar
                                        dengan monitoring realtime dan MQTT.
                                    </li>
                                    <li>
                                        Membangun pencatatan timbangan masuk via
                                        TCP server dan simpan ke database.
                                    </li>
                                    <li>
                                        Menambahkan fitur rendemen (%) untuk
                                        analisis efisiensi produksi.
                                    </li>
                                    <li>
                                        Instalasi server & konfigurasi file
                                        sharing NAS + backup.
                                    </li>
                                    <li>
                                        Setup jaringan lokal: router, kabel LAN,
                                        dan troubleshooting.
                                    </li>
                                    <li>
                                        Menangani masalah komputer, CCTV, dan
                                        mesin fotokopi.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Job 2 */}
                    <div>
                        <div className="flex space-x-0 md:space-x-4">
                            <div className="flex-none w-20 hidden md:block">
                                <img
                                    src={building}
                                    alt=""
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    Frontend Developer - PT Data Unggul
                                    Informatika
                                </h3>
                                <p className="text-gray-500">
                                    April 2024 - Juni 2024
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-2">
                                    <li>
                                        Membangun website company profile untuk
                                        perusahaan digital printing di NTT.
                                    </li>
                                    <li>
                                        Membangun sistem point of sales
                                        menggunakan Laravel Livewire dan
                                        Tailwind CSS.
                                    </li>
                                    <li>
                                        Mengintegrasikan data dengan sistem
                                        backend.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Job 3 */}
                    <div>
                        <div className="flex space-x-0 md:space-x-4">
                            <div className="flex-none w-20 hidden md:block">
                                <img
                                    src={building}
                                    alt=""
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    Flutter Developer - PT Data Unggul
                                    Informatika
                                </h3>
                                <p className="text-gray-500">
                                    Januari 2024 - Maret 2024
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-2">
                                    <li>
                                        Bertanggung jawab atas frontend aplikasi
                                        presensi berbasis Android.
                                    </li>
                                    <li>
                                        Mengimplementasikan desain dari Figma.
                                    </li>
                                    <li>
                                        Mengintegrasikan API, termasuk fitur
                                        kamera dan radius lokasi pengguna.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Job 4 */}
                    <div className="">
                        <div className="flex space-x-0 md:space-x-4">
                            <div className="flex-none w-20 hidden md:block">
                                <img
                                    src={disty}
                                    alt=""
                                    className="object-cover mt-2"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    MSIB - Internship • PT Disty Teknologi
                                    Indonesia
                                </h3>
                                <p className="text-gray-500">
                                    Agustus 2022 - Januari 2023
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-2">
                                    <li>
                                        Bertanggung jawab dalam membuat sistem
                                        backend untuk menyimpan dan mengelola
                                        data dari Website Dicom Viewer.
                                    </li>
                                    <li>
                                        Menggunakan Express.js sebagai teknologi
                                        untuk pengembangan backend.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pendidikan */}
            <section className="max-w-4xl w-full rounded-lg mt-6 p-4 bg-white shadow-sm avoid-page-break">
                <h2 className="text-xl font-bold mb-4">Pendidikan</h2>
                <div className="space-y-6">
                    <div className="flex space-x-4">
                        <div className="flex-none w-20">
                            <img src={pens} alt="" className="object-cover" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">
                                Politeknik Elektronika Negeri Surabaya
                            </h3>
                            <h5 className="text-md font-semibold">
                                D3 Teknik Informatika
                            </h5>
                            <p className="text-gray-500">
                                Juli 2020 - Juli 2023
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projek */}
            <section className="max-w-4xl w-full mt-6 p-4 bg-white shadow-sm">
                <h2 className="text-xl font-bold mb-4">Projek</h2>

                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-2 space-x-4">
                        <div>
                            <h3 className="text-lg font-semibold">
                                Pengingat Tagihan Otomatis
                            </h3>
                            <p className="text-gray-500 text-justify">
                                Mengembangkan aplikasi web untuk pencatatan
                                pelanggan, pelacakan penagihan, dan pengiriman
                                pengingat otomatis via email & WhatsApp.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Aplikasi Presensi Berbasis Flutter
                            </h3>
                            <p className="text-gray-500 text-justify">
                                Membangun frontend aplikasi absensi menggunakan
                                Flutter dengan fitur foto kamera dan pelacakan
                                lokasi untuk verifikasi kehadiran.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skill */}
            <section className="max-w-4xl w-full mt-6 p-4 bg-white shadow-sm">
                <h2 className="text-xl font-bold mb-4">Skill</h2>

                <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-4">
                        <li>Mysql</li>
                        <li>PostgreSQL</li>
                        <li>API Integration</li>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>Javascript / ES6 / jQuery</li>
                        <li>Flutter Developer</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js / Express.js</li>
                        <li>TypeScript</li>
                        <li>Laravel</li>
                        <li>OOP</li>
                    </div>
                </div>
            </section>

            {/* Bahasa */}
            <section className="max-w-4xl w-full mt-6 p-4 bg-white shadow-sm">
                <h2 className="text-xl font-bold mb-4">Bahasa</h2>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-4">
                        <li>Indonesia - Bahasa Ibu</li>
                        <li>Javanese - Lancar</li>
                        <li>English - Menengah</li>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="max-w-4xl w-full mt-8 p-4 bg-white shadow-sm">
                <h2 className="text-xl font-bold mb-8">
                    Download My Portfolio
                </h2>
                <div className="mb-4 text-center">
                    <a
                        href="/assets/portfolio.pdf"
                        className="bg-slate-600 text-white px-6 py-3 rounded-full hover:bg-slate-900 transition-colors duration-300"
                        download
                    >
                        Download Portfolio
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
