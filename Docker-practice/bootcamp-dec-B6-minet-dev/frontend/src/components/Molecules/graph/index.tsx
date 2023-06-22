import { Box } from '@mui/material'
import Chart from 'react-apexcharts'
interface Props {
  series?: {
    name:string
    data:number[]
  }[] 
  height?: string
  width?: string
  colors?: string[]
  opacity?: number
  id?: string
  labelVisible?:boolean
  gridVisible?:boolean
}
interface GraphProps {
    options:{
        colors?:string[]
        chart?:{
            id?:string
            toolbar: {
                show: boolean
            }
        }
        dataLabels?: {
            enabled: boolean,
        }
        fill?: object
        legend?: object
        stroke?: object
        xaxis? : {
            labels?:{
                show?:boolean
            }
            categories : string[]
            tickPlacement: string
            axisBorder : {
                show : boolean
            }
            axisTicks : {
                show: boolean
            }
        }
        yaxis?: {
            show: boolean
        }
        tooltip?: {
            enabled: boolean,
          },
          grid?:
          {
            show?:boolean
          }
    }
}
export const Graph = (props: Props) => {
  const graphDef: GraphProps = 
    {
        options:{
            colors:props.colors,
            chart:{
                id:props.id,
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                colors: props.colors,
                type: "SOLID",
                opacity: props.opacity,
              },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
            },
            stroke : {
                width:2
            },
            xaxis : {
                labels:{show:props.labelVisible},
                categories :["JUN8","JUN15","JUN22","JUN29","JUL6","JUL13"],
                tickPlacement : 'none',
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                show: false
            },
            tooltip: {
                enabled: false,
              },
            grid:{
                show:props.gridVisible
            }
        },
    }

  return (
        <Box data-testid="area-graph" >
            <Chart
                options={graphDef.options}
                series={props.series}
                width={props.width}
                height={props.height}
                type="area"
            ></Chart>
        </Box>
  )
}