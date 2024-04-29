# iro-react-wrapper
iro react wrapper

## use
```jsx

  const [color, setColor] = useState<any>({
    hex: "#FFF000"
  });

        <ColorPicker
          onChange={(color: { hexString: any }) => {
            setColor({
              hex: color.hexString,
            })
          }}
          options={{
            //all this options are regular iro.js options
            color: color.hex,
            width: 300,
            height: 300,
            wheelLightness: false,
            layoutDirection: "horizontal",
            layout: [
              {
                component: iro.ui.Box,
              },
              {
                component: iro.ui.Slider,
                options: {
                  id: "hue-slider",
                  sliderType: "hue",
                },
              },
            ],
          }}
        />
```
