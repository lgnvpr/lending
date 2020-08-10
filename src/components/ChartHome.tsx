import React, { Component } from 'react'
import { View} from "react-native";
import {LineChart} from "react-native-chart-kit";
import { Line } from "react-chartjs-2";

export default class ChartHome extends Component<props, state> {
    constructor(props : any ){
        super(props);
        this.state ={
            data : {
                labels : ["cột1", "cột 2", "cột 3", "cột4"],
                datasets : [
                    {
                        label : "hàng 1",
                        data : [1, 4, 2, 8],
                        fill : false,
                        backgroundColor :"rgba(1,92,192,1)",
                        borderColor : "rgba(1,92,192,1)"

                    },
                    {
                        label : "hàng 2",
                        data : [2, 6, 5, 9],
                        fill : false,
                        backgroundColor :"rgba(75,192,192,1)",
                        borderColor : "rgba(75,192,192,1)"

                    },
                    {
                        label : "hàng 3",
                        data : [3, 4, 8, 7],
                        fill : false,
                        backgroundColor :"rgba(90,192,92,1)",
                        borderColor : "rgba(90,192,92,1)"

                    }
                ]
            }
        }
    }
    
    render() {
        return (
            <View>

                <Line
                    data = {this.state.data}
                    options ={
                        {
                            title :{
                                display:true,
                                text : "Chart",
                                color : "white"
                            },
                            animation : { 
                                duration : 3000
                            },
                            tooltips: {
                                mode: 'index',
                                axis: 'y'
                            }
                        }
                    }
                />



                {/* <LineChart
                    data = {{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                          {
                            data: [
                              {
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                              },
                            ]
                          }
                        ]
                      }}
                      width={370} // from react-native
                      height={220}
                      yAxisSuffix="coin"
                      yAxisInterval={1}
                      chartConfig={{
                        backgroundGradientFrom: "#1F1F1D",
                        backgroundGradientTo: "#1F1F1D",

                        decimalPlaces: 1, //chữ số thập phân
                        color: () => `rgba(104, 55, 155, 1)`,
                        labelColor: () => `white`,
                        style: {
                          borderRadius: 10
                        },
                        propsForDots: {
                          r: "6",
                          strokeWidth: "1",
                          stroke: "#ffa726"
                        }
                      }}
                      bezier
                      style={{
                        marginVertical: 8,
                        borderRadius: 16
                      }}
                ></LineChart> */}



            </View>
        )
    }
}

type props ={
    data : any
}

type state = {
    data : any
}
