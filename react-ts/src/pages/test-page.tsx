import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Button } from "primereact/button";
import axios from "axios";

const TestPage = () => {
    const [input, setInput] = useState("0");
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [hasil, setHasil] = useState(0);
    const [operation, setOperation] = useState("");

    const formInput = (val: any) => {
        setInput((prev) => `${prev}${val}`);
    };

    const formOperation = (val: any) => {
        setOperation(val);
        if (x === 0) {
            setX(parseInt(input));
        } else {
            setY(parseInt(input));
        }
        setInput("");
    };

    const count = () => {
        setY(parseInt(input)); // Mengatur nilai y dengan input terbaru

        let result;
        switch (operation) {
            case "+":
                result = x + parseInt(input);
                break;
            case "-":
                result = x - parseInt(input);
                break;
            case "*":
                result = x * parseInt(input);
                break;
            case "/":
                result = x / parseInt(input);
                break;
            default:
                return;
        }
        setHasil(result);
        // setX(result); // Menyimpan hasil ke `x` untuk operasi selanjutnya
        setInput(""); // Mengosongkan input setelah operasi
    };

    const formPost = async () => {
        try {
            axios
                .post(
                    "https://railway-app-laravel-production.up.railway.app/api/register",
                    {
                        name: "Alfan",
                        email: "alfan@gmail.com",
                        password: "alfan123",
                        password_confirm: "alfan123",
                    }
                )
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log("fail");
        }
    };

    return (
        <div className="grid grid-cols justify-center items-start p-6 space-y-4">
            <InputText value={input} className="border-0 rounded-md" readOnly />
            <div className="flex space-x-4">
                <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                        <Button
                            key={num}
                            onClick={() => formInput(num.toString())}
                            className="w-8"
                            label={num.toString()}
                            severity="secondary"
                        />
                    ))}
                    <Button
                        onClick={() => {
                            setX(0);
                            setY(0);
                            setOperation("");
                            setInput("");
                            setHasil(0);
                        }}
                        className="w-8"
                        label="AC"
                        severity="secondary"
                    />
                    <Button
                        onClick={() => {
                            setInput("");
                        }}
                        className="w-8"
                        label="C"
                        severity="secondary"
                    />
                </div>
                <div className="grid grid-cols-1 gap-3">
                    {["+", "-", "*", "/"].map((op) => (
                        <Button
                            key={op}
                            onClick={() => formOperation(op)}
                            className="w-8"
                            label={op}
                            severity="secondary"
                        />
                    ))}
                </div>
            </div>
            <Button onClick={count} label="=" />
            <p>
                {x} {operation} {y} = {hasil}
            </p>

            <Button label="Cobain" onClick={formPost} />
        </div>
    );
};

export default TestPage;
