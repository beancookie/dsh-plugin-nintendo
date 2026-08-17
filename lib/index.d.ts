import type { Context } from '@deepseek-ai/cordis';
import Schema from '@deepseek-ai/schemastery';
import type { IncomingMessage, ServerResponse } from 'node:http';
declare module '@deepseek-ai/cordis' {
    interface Context {
        webServer: {
            register(route: {
                kind: 'exact' | 'prefix';
                path: string;
                handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>;
            }): () => void;
            readonly port: number;
        };
    }
}
export declare const name = "dsh-plugin-nintendo";
export declare const inject: string[];
export declare const Config: Schema<Schemastery.ObjectS<{
    romsDir: Schema<string, string>;
    maxRomBytes: Schema<number, number>;
    autoOpen: Schema<boolean, boolean>;
}>, Schemastery.ObjectT<{
    romsDir: Schema<string, string>;
    maxRomBytes: Schema<number, number>;
    autoOpen: Schema<boolean, boolean>;
}>>;
export type Config = Schemastery.TypeT<typeof Config>;
export declare function apply(ctx: Context, config: Config): void;
//# sourceMappingURL=index.d.ts.map