import { Ref } from 'vue';
declare module "dayjs/plugin/duration" {
    interface Duration {
        $d: {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        };
    }
}
export declare const useCountdown: (units: Ref<plugin.DurationUnitsObjectType | string | number>) => import("vue").ComputedRef<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}>;
