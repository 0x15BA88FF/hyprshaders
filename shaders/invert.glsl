#version 300 es
precision mediump float;
in vec2 v_texcoord;
uniform sampler2D tex;
out vec4 FragColor;

void main() {
    vec4 pixColor = texture(tex, v_texcoord);
    pixColor.rgb = 1.0 - pixColor.rgb;
    FragColor = pixColor;
}
