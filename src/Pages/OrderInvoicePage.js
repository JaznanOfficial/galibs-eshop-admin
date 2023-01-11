import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const OrderInvoicePage = () => {
    const printContent = useRef();
    const { state } = useLocation();
    //console.log(state);
    const { _id, name, email, img, phone, createdAt, products } = state || {};

    return (
        <div>
            <section class="p-5 ">
                <div class="max-w-5xl mx-auto py-16 bg-white">
                    <article class="overflow-hidden" ref={printContent}>
                        <div class="bg-[white] rounded-b-md">
                            <div class="p-9 flex flex-col md:flex-row md:justify-between justify-center items center gap-10">
                                <div class="flex flex-col justify-center md:items-start items-center">
                                    <div>
                                        <img
                                            class="object-cover w-20 h-20"
                                            src="https://i.ibb.co/9Yg0Pvx/cooking-bird.png"
                                            alt=""
                                        />
                                    </div>

                                    <p class="text-xl font-extrabold tracking-tight uppercase font-body text-start text-primary">
                                        Galib's E-shop
                                    </p>
                                    <p className="text-start text-gray-600">
                                        123, Shapla chottor,{" "}
                                    </p>
                                    <p className="text-start text-gray-600">Dhaka-1212 </p>
                                </div>
                                <div className="text-black flex flex-col justify-center md:items-end items-center">
                                    <h2 className="text-xl font-bold">Invoice Id:</h2>
                                    <h3 className="text-gray-600">{_id}</h3>
                                </div>
                            </div>
                            <div className="bg-green-100">
                                <div className="flex flex-col md:flex-row md:justify-between items-start justify-center p-9 mx-auto">
                                    <div>
                                        <p className="text-black text-lg font-bold text-start">
                                            Date:
                                        </p>
                                        <p className="text-gray-600">{createdAt?.slice(0, 10)}</p>
                                    </div>
                                    <div>
                                        <p className="text-black text-lg font-bold text-start">
                                            To:
                                        </p>
                                        <p className="text-gray-600  text-start"> {name}</p>
                                        <p className="text-gray-600  text-start"> {email}</p>
                                        <p className="text-gray-600  text-start"> {phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-9">
                                <div class="flex flex-col mx-0 mt-8">
                                    <table class="min-w-full divide-y divide-slate-500">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                                                >
                                                    Quantity
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                                                >
                                                    Rate
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                                                >
                                                    Total Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products?.map((product) => {
                                                const { quantity, price, img } = product;
                                                var sub_total = quantity * price;
                                                return (
                                                    <tr class="border-b border-slate-200">
                                                        <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                                            <div class="font-medium text-slate-700">
                                                                Lenovo Thinkpad t70s
                                                            </div>
                                                            <div class="mt-0.5 text-slate-500 sm:hidden">
                                                                1 unit at $0.00
                                                            </div>
                                                        </td>
                                                        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                            <strong>{quantity}</strong>
                                                        </td>
                                                        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                            <strong>${price}</strong>
                                                        </td>
                                                        <td class="py-4 pl-3 pr-4 text-sm text-right text-primary sm:pr-6 md:pr-0">
                                                            <strong>${quantity * price}</strong>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    colspan="3"
                                                    class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                                                >
                                                    Subtotal
                                                </th>
                                                <th
                                                    scope="row"
                                                    class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                                                >
                                                    Subtotal
                                                </th>
                                                <td class="pt-6 pl-3 pr-4 text-sm text-right text-primary sm:pr-6 md:pr-0">
                                                    <strong>${60000}</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    colspan="3"
                                                    class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                                                >
                                                    Discount
                                                </th>
                                                <th
                                                    scope="row"
                                                    class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                                                >
                                                    Discount
                                                </th>
                                                <td class="pt-6 pl-3 pr-4 text-sm text-right text-primary sm:pr-6 md:pr-0">
                                                    <strong>$0.00</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    colspan="3"
                                                    class="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                                                >
                                                    Tax
                                                </th>
                                                <th
                                                    scope="row"
                                                    class="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                                                >
                                                    Tax
                                                </th>
                                                <td class="pt-4 pl-3 pr-4 text-sm text-right text-primary sm:pr-6 md:pr-0">
                                                    <strong>$0.00</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    colspan="3"
                                                    class="hidden pt-4 pl-6 pr-3 text-lg font-bolder text-right text-slate-700 sm:table-cell md:pl-0"
                                                >
                                                    Total
                                                </th>
                                                <th
                                                    scope="row"
                                                    class="pt-4 pl-4 pr-3 text-lg font-bolder text-left text-slate-700 sm:hidden"
                                                >
                                                    Total
                                                </th>
                                                <td class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-primary sm:pr-6 md:pr-0">
                                                    <strong>${60000}</strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            <div class="mt-30 p-9">
                                <div class="border-t pt-9 border-slate-200">
                                    <div class="text-sm font-light text-slate-700">
                                        <p>
                                            Payment terms are 14 days. Please be aware that
                                            according to the Late Payment of Unwrapped Debts Act
                                            0000, freelancers are entitled to claim a 00.00 late fee
                                            upon non-payment of debts after this time, at which
                                            point a new invoice will be submitted with the addition
                                            of this fee. If payment of the revised invoice is not
                                            received within a further 14 days, additional interest
                                            will be charged to the overdue account and a statutory
                                            rate of 8% plus Bank of England base of 0.5%, totalling
                                            8.5%. Parties cannot contract out of the Act’s
                                            provisions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="flex flex-row justify-center md:justify-end items-center w-11/12 mx-auto">
                        <ReactToPrint
                            trigger={() => (
                                <button className="btn w-full md:w-1/5 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary">
                                    <i className="fa-solid fa-plus"></i>{" "}
                                    <span className="ml-1">Print</span>
                                </button>
                            )}
                            content={() => printContent.current}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderInvoicePage;
