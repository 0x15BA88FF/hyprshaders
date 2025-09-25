// vim: set ft=glsl:
// blue light filter shader
// values from https://reshade.me/forum/shader-discussion/3673-blue-light-filter-similar-to-f-lux
#version 300 es

precision mediump float;
in vec2 v_texcoord;
uniform sampler2D tex;
out vec4 FragColor;

void main() {

    vec4 pixColor = texture(tex, v_texcoord);

    // red
    pixColor[0] *= 0.7;
    // green
    pixColor[1] *= 0.6;
    // blue
    pixColor[2] *= 0.5;

    FragColor = pixColor;
}
