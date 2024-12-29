import {FunctionComponent, useId} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => {
  const id = useId()
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props} >
      <rect x="0.411621" y="0.411621" width="13.1765" height="13.1765" fill={`url(#pattern${id})`}/>
      <defs>
        <pattern id={`pattern${id}`} patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref={`#image${id}`} transform="translate(-1.30876 -1.30876) scale(0.00704779)"/>
        </pattern>
        <image id={`image${id}`} width="512" height="512"
               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTEwLTA4VDE4OjUyOjE3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEwLTA4VDE4OjUzOjI1KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0xMC0wOFQxODo1MzoyNSswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNWVjOTI5Ni00OWE4LTA5NDctYTY5OS01MmMzZDk2NjNkZGEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZWM5MjczMi02MDYwLWU3NDMtODdhMy1jNzE2YmY2ZDk2NzAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYzI2OTI1OC02YTJlLTE3NDMtOGIzMC00NGYxMmE5MTJlZjEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFjMjY5MjU4LTZhMmUtMTc0My04YjMwLTQ0ZjEyYTkxMmVmMSIgc3RFdnQ6d2hlbj0iMjAyNC0xMC0wOFQxODo1MjoxNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYTY4MDQ2Ny05OGU3LWQ5NDMtOTc0NC02ZjIxMjllMmVhNDEiIHN0RXZ0OndoZW49IjIwMjQtMTAtMDhUMTg6NTI6MTcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTVlYzkyOTYtNDlhOC0wOTQ3LWE2OTktNTJjM2Q5NjYzZGRhIiBzdEV2dDp3aGVuPSIyMDI0LTEwLTA4VDE4OjUzOjI1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HYBWFgAAMQ9JREFU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IQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFiIAAABgIQIAAAAWIgAAAGAhAgAAABYiAAAAYCECAAAAFvr/f1SaQD+ilDwAAAAASUVORK5CYII="/>
      </defs>
    </Svg>
  )
};

export default Icon;
