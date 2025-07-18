import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";
import { useTheme } from "@/components/theme-provider/theme-provider";

const StatisticsChart = () => {
  // hooks
  const { theme } = useTheme();

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      theme === "dark"
        ? am5themes_Dark.new(root)
        : am5themes_Animated.new(root),
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      }),
    );

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });

    xRenderer.labels.template.setAll({
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "developer",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      }),
    );

    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "developer",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      }),
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });
    series.columns.template.adapters.add("fill", function (_fill, target) {
      return chart.get("colors")?.getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (_stroke, target) {
      return chart.get("colors")?.getIndex(series.columns.indexOf(target));
    });

    // Set data
    let data = [
      {
        developer: "Total users",
        value: 132,
      },
      {
        developer: "Active users",
        value: 121,
      },
      {
        developer: "Pending invites",
        value: 11,
      },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [theme]);

  return (
    <div className="border-border flex h-full max-h-[50%] w-full flex-1 flex-col rounded-xl border">
      <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default StatisticsChart;
